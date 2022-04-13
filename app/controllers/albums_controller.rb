class AlbumsController < ApplicationController
    wrap_parameters format: []
	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    require 'rest-client'
    require 'json'
    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            albums = user.albums
        else
            albums = Album.all
        end
        render json: albums
    end
    


    def show
        album = Album.find(params[:id])
        render json: album
      end

    def create
        album = Album.create(album_params)
        render json: album, status: :created
    end

    def destroy
        album = Album.find(params[:id])
        album.destroy
        head :no_content
    end

    private

    def album_params
        params.permit(:deezer_album_id, :album_image, :album_name, :artist_id, :genre, :num_tracks, :artist_image, :artist_name, :deezer_artist_id, :user_id)
    end

    def render_unprocessable_entity(invalid)
		render json: {error: invalid.record.errors}, status: :unprocessable_entity
	end
end
