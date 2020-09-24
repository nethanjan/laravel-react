<?php

namespace App\Http\Resources;

use App\Models\Author;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => Author::find($this->author_id)->name,
            'content' => $this->content,
            'url' => $this->url,
            'createdAt' => $this->created_at->format('Y-m-d'),
        ];
    }
}
