<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $movies = Movie::all();
        $movies = Movie::withTrashed()->orderBy('deleted_at')->get();
        return inertia('Admin/Movie/Index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data["thumbnail"] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data["slug"] = Str::slug($data["name"]);
        $movie = Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            "message" => "Movie inserted successfully.",
            "type" => "Success",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();

        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail
            if ($movie->thumbnail) {
                Storage::disk('public')->delete($movie->thumbnail);
            }
            
            // Store new thumbnail
            $data['thumbnail'] = $request->file('thumbnail')->store('movies', 'public');
        } else {
            // If no new thumbnail is uploaded, remove it from $data to prevent overwriting with null
            unset($data['thumbnail']);
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie updated successfully.",
            'type' => "Success"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie deleted successfully.",
            'type' => "Success"
        ]);
    }

    public function restore($movie) 
    {
        Movie::withTrashed()->find($movie)->restore();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie restore successfully.",
            'type' => "Success"
        ]);
    }
}
