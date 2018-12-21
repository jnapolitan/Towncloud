class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.song_id = Song.find(params[:song_id])
        render json: @comment.errors.full_messages
    end

    def destroy
        @comment = Comment.find(params[:id])
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end
end
