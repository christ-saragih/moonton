<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/LCbWWx-mn6w?si=bUuhBIwW97Lowl0a',
                'thumbnail' => 'https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'rating' => 4.8,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/ZMAM7d0Gmas?si=sMhiQMI60DNVqEur',
                'thumbnail' => 'https://images.unsplash.com/photo-1723743809921-07781a7c6535?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'rating' => 4.6,
                'is_featured' => false,
            ],
            [
                'name' => 'Naruto The Movie 9',
                'slug' => 'naruto-the-movie-9',
                'category' => 'Anime',
                'video_url' => 'https://youtu.be/_8RBgibmu1I?si=KBehS8SwGXoZjiEf',
                'thumbnail' => 'https://images.unsplash.com/photo-1723766700475-3f8f1d3c0c1a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'rating' => 4.9,
                'is_featured' => true,
            ],
        ];

        Movie::insert($movies);
    }
}
