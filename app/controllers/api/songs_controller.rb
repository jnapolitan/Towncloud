class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
    end

    def show
        @song = Song.find(params[:id])
    end
    
    def create
        if media_missing?
            render json: ["Both image and audio must be included"], status: 401
        else
            @song = current_user.songs.new(song_params)
            if @song.save
                render :show
            else
                render json: @song.errors.full_messages, status: 401
            end
        end
    end

    def update
        @song = Song.find(params[:id])

        if @song.update_attributes(song_params)
            render :show
        else
            render json: @song.errors.full_messages, status: 401
        end
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy
        render :show
    end

    private

    def song_params
        params.require(:song).permit(
            :title, 
            :genre, 
            :description, 
            :image, 
            :audio
        )
    end

    def media_missing?
        if song_params[:image] == "null" ||
            song_params[:audio] == "null"
            return true
        end
        false
    end
end
