import {Component} from "react";
import { SearchBar } from "./Searchbar/SearchBar";
import { getImagesPixabay } from "Services/ImagesAPI";
import { Notify } from "notiflix";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGallery/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";


export class App extends Component{
  state = {
    query: '',
    totalHits: 0,
    page: 1,
    images: [],
    isLoader: false
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({isLoader: true})
      getImagesPixabay(this.state.page, this.state.query)
        .then(data => {
          if (data.data.totalHits === 0) {
            Notify.failure("Sorry! Can't find any pictures");
          }
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...data.data.hits],
              totalHits: data.data.totalHits,
            }
          })
        
        }).catch(err => console.log(err))
          .finally(() => this.setState({isLoader: false}))
    
    }
  }

  onSubmit = ev => {
    ev.preventDefault()
    const queryInput = ev.currentTarget.searchInput.value.trim()
    this.setState({
      query: queryInput,
      isShowGallery: true,
      page: 1,
      images: [],
    })
  }

  loadMore = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    })
  }

  render() {
    return (<>
      <SearchBar onSubmit={this.onSubmit}/>
      {this.state.isLoader && <Loader/>}
      {this.state.images.length > 0 && (<>
      <ImageGallery images={this.state.images}/>
        {this.state.images.length !== this.state.totalHits && <Button loadMore={this.loadMore} />}
        </>
      )}
    </>)
  }
};
