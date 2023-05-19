FROM php:8.0-fpm

RUN apt-get update && \
    apt-get install -y \
        curl \
        git \
        unzip \
        libmcrypt-dev \
        libicu-dev \
        libpq-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libxml2-dev \
        libzip-dev \
        zip \
        libonig-dev \ 
        && docker-php-ext-install pdo_mysql mysqli mbstring intl zip exif pcntl bcmath soap gd \
        && rm -rf /var/lib/apt/lists/*

