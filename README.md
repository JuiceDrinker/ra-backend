## Relief Applications Code Challenge

## Front-end

### Components

- SearchBar
- VideoView
- History
- Bookmarks

### User Stories

- When the user pastes a valid YouTube URL into the input field and press submit, the video should load
- When the user clicks play on a video, the video should start playing and the video should be added to the history
- When the user clicks on the history icon, the whole history can be seen
- When the user clicks a video in the history, that video should load
- When the user clicks on the plus icon, the current video is added to the bookmarks
- When the user clicks on the bookmarks tab, all current bookmarks can be seen
- The user can see how many bookmarks are saved currently.

## Back-end

### Models

History

```
{
  title: { type: String, required: true },
  videoId: { type: String, required: true, unique: true },
  author: { type: String, required: true },
}

```

### Routes

| METHOD | ROUTE    | Description                          | REQUEST-BODY             |
| ------ | -------- | ------------------------------------ | ------------------------ |
| GET    | /history | Retrieve history of watched videos   |                          |
| POST   | /history | Add to the history of watched videos | {title, videoId, author} |
