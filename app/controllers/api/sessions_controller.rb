class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login(@user)
            render :show
        else
            render json: ['Invalid username or password'], status: 404
        end
    end

    def destroy
        raise '404 user not found' unless logged_in?
        logout
        render json: ['You have been logged out']
    end
end
