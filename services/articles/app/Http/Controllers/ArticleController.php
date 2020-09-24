<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticleResourceCollection;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Create Article
     *
     * @param Request $request
     * @return ArticleResource
     */
    public function store(Request $request): ArticleResource
    {
        $request->validate([
            'author_id'  => 'required|exists:authors,id',
            'title'  => 'required|max:255|escape',
            'url'  => 'required|unique:articles|escape',
            'content'  => 'required',
        ]);

        $article = Article::create($request->all());

        return new ArticleResource($article);
    }

    /**
     * Get All Articles
     *
     * @return ArticleResourceCollection
     */
    public function index(): ArticleResourceCollection
    {
        return new ArticleResourceCollection(Article::paginate());
    }

    /**
     * Get Article
     *
     * @param Article $article
     * @return ArticleResource
     */
    public function show(Article $article): ArticleResource
    {
        return new ArticleResource($article);
    }

    /**
     * Update Article
     *
     * @param Article $article
     * @param Request $request
     * @return ArticleResource
     */
    public function update(Article $article, Request $request): ArticleResource
    {
        $request->validate([
            'author_id'  => 'required|exists:authors,id',
            'title'  => 'required|max:255',
            'url'  => 'required|unique:articles',
            'content'  => 'required',
        ]);

        $article->update($request->all());

        return new ArticleResource($article);
    }

    /**
     * Delete Article
     *
     * @param Article $article
     * @return void
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json();
    }
}
