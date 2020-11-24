<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Expense; 

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function expenses(){
        return $this->hasMany(Expense::class);
    }
}
