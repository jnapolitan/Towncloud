class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all.where(song_id: params[:song_id])
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.song_id = Song.find(params[:song_id])
        if @comment.save
            render json: :show
        else
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        render json: :show
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end
end
