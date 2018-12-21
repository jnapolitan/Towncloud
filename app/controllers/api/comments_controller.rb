class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all.where(song_id: params[:song_id])
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        render :show
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :song_id)
    end
end
