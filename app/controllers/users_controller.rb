class UsersController < ApplicationController
    skip_before_action :authorized_user, only: :create

    require 'rest-client'
    require 'json'
    def index
        render json: User.all, status: :ok
    end

    def show
        if current_user
            render json: current_user,  status: :ok
        else
            render json: {error: "No current user!"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy
        current_user.destroy
        head :no_content
    end

    def update
        user = User.find(params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
