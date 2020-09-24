<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorResource;
use App\Http\Resources\AuthorResourceCollection;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Create Author
     *
     * @param Request $request
     * @return AuthorResource
     */
    public function store(Request $request): AuthorResource
    {
        $request->validate([
            'name'  => 'required|max:255',
        ]);

        $author = Author::create($request->all());

        return new AuthorResource($author);
    }

    /**
     * Get Author
     *
     * @param Author $author
     * @return AuthorResource
     */
    public function show(Author $author): AuthorResource
    {
        return new AuthorResource($author);
    }

    /**
     * Get all Authors
     *
     * @return AuthorResourceCollection
     */
    public function index(): AuthorResourceCollection
    {
        return new AuthorResourceCollection(Author::paginate());
    }

    /**
     * Update Author
     *
     * @param Author $author
     * @param Request $request
     * @return AuthorResource
     */
    public function update(Author $author, Request $request): AuthorResource
    {
        $request->validate([
            'name'  => 'required|max:255',
        ]);

        $author->update($request->all());

        return new AuthorResource($author);
    }

    /**
     * Delete Author
     *
     * @param Author $author
     * @return void
     */
    public function destroy(Author $author)
    {
        $author->delete();

        return response()->json();
    }
}
