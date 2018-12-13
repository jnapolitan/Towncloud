class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
    end

    def show
        @song = Song.find(params[:id])
    end
    
    def create
        @song = Song.new(song_params)

        if @song.save
            render :show
        else
            render json: @song.errors.full_messages, status: 401
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
        params.require(:song).permit(:user_id, :title, :genre, :description)
    end
end
