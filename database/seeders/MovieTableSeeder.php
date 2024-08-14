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
                'video_url' => 'https://www.youtube.com/watch?the-shawshank-redemption',
                'thumbnail' => 'https://m.media-amazon.com/images/the-shawshank-redemption',
                'rating' => 9.3,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?the-godfather',
                'thumbnail' => 'https://m.media-amazon.com/images/the-godfather',
                'rating' => 9.2,
                'is_featured' => false,
            ],
            [
                'name' => 'Naruto',
                'slug' => 'naruto',
                'category' => 'Anime',
                'video_url' => 'https://www.youtube.com/watch?naruto',
                'thumbnail' => 'https://m.media-amazon.com/images/naruto',
                'rating' => 9.7,
                'is_featured' => true,
            ],
        ];

        Movie::insert($movies);
    }
}
