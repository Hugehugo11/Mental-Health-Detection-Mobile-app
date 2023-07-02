import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, ImageBackground, ScrollView } from 'react-native';

const LibraryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from API or local storage
    // Update the 'books' state with the fetched data
    const fetchedBooks = [
      { id: 1, title: 'Overcoming Depression', author: 'Lawrence E. Shapiro Phd', pdfUrl: 'https://transfer.sh/9O7o16ejQI/overcomingdepressionworkbook.pdf' },
      { id: 2, title: 'Living with Anxiety', author: 'Paul Swift, Isabella Goldie', pdfUrl: 'https://transfer.sh/i8xy1PtGUG/01.%20Living%20with%20Anxiety%20Author%20Paul%20Swift%2C%20Eva%20Cyhlarova%2C%20Isabella%20Goldie.pdf' },
      { id: 3, title: 'How to Overcome Fear & Anxiety', author: 'Mental Health Foundation', pdfUrl: 'https://transfer.sh/OKeP7o5rL5/MHF-How-to-overcome-fear-and-anxiety.pdf' },
      { id: 4, title: 'Depression and Low Mood', author: 'Dr. Lesley Maunder, Dr.Lorna Cameroon', pdfUrl: 'https://transfer.sh/3i0Ml1cHs0/depression-and-low-mood.pdf' },
      { id: 5, title: 'Depression The way out of your Prison', author: 'Dorothy Rowe', pdfUrl: 'https://transfer.sh/7BatHEE3IU/Depression%20The%20way%20out%20of%20your%20Prison.pdf' },
      { id: 6, title: 'Anxiety and Panic attacks', author: 'Mental Health Charity', pdfUrl: 'https://transfer.sh/TNrBLlb6k6/12.%20Anxiety%20and%20panic%20attacks%20Author%20Mind%2C%20the%20mental%20health%20charity.pdf' },
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
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
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

          {books.map((book) => (
            <View key={book.id} style={styles.bookItem}>
              <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
              </View>
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
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  bookDetails: {
    flex: 1,
    marginRight: 10,
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  bookAuthor: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
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
