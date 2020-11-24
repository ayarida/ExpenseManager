<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->string('description')->nullable(); 
            $table->unsignedBigInteger('user_id'); 
            $table->unsignedBigInteger('category_id'); 
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); 
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade'); 
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expenses');
    }
}
