class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.song_id = Song.find(params[:song_id])
        if @comment.save
            render json: @comment
        else
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end
end
