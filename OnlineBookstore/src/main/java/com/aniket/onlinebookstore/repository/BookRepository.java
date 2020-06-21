package com.aniket.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aniket.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
