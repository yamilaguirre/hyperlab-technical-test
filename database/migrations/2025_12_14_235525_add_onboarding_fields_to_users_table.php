<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->nullable()->after('name');
            $table->string('full_name')->nullable()->after('role');
            $table->string('username')->unique()->nullable()->after('email');
            $table->date('birth_date')->nullable()->after('username');
            $table->string('gender')->nullable()->after('birth_date');
            $table->string('language')->nullable()->after('gender');
            $table->text('description')->nullable()->after('language');
            $table->json('categories')->nullable()->after('description');
            $table->json('socials')->nullable()->after('categories');
            $table->string('profile_photo')->nullable()->after('socials');
            $table->json('blocked_countries')->nullable()->after('profile_photo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'role',
                'full_name',
                'username',
                'birth_date',
                'gender',
                'language',
                'description',
                'categories',
                'socials',
                'profile_photo',
                'blocked_countries',
            ]);
        });
    }
};
