json.extract! song, :id, :user_id, :title, :genre, :description
json.imageUrl url_for(song.image)
json.audioUrl url_for(song.audio)