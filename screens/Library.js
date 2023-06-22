import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const LibraryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from API or local storage
    // Update the 'books' state with the fetched data
    const fetchedBooks = [
      { id: 1, title: 'Book 1', author: 'Author 1', pdfUrl: 'https://transfer.sh/VIpaIlR7Dg/MCSE-Lecture-1_2022_Introduction.pdf' },
      { id: 2, title: 'Book 2', author: 'Author 2', pdfUrl: 'https://transfer.sh/mEUCy41i2u/MCSE-Lecture-3%20and%204_2022.pdf' },
      { id: 3, title: 'Book 3', author: 'Author 3', pdfUrl: 'https://transfer.sh/bUjlVt4t2r/MCSE-Lecture-9%20and%2010.pdf' },
      // Add more books here
    ];
    setBooks(fetchedBooks);
  }, []);

  const handleSearch = () => {
    // Perform search logic here
    // Filter the 'books' state based on the search query
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  const handleDownload = (bookUrl) => {
    // Open the book's URL to download it
    Linking.openURL(bookUrl);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search books"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <View style={styles.bookList}>
        {books.map((book) => (
          <View key={book.id} style={styles.bookItem}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text>
            {!book.downloaded && (
              <TouchableOpacity
                style={styles.downloadButton}
                onPress={() => handleDownload(book.pdfUrl)}
              >
                <Text style={styles.downloadButtonText}>Download</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookList: {
    flex: 1,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LibraryScreen;
