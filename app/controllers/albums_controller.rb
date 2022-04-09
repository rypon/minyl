class AlbumsController < ApplicationController
    wrap_parameters format: []
	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Album.all, status: :ok
    end

    def show
        render json: Album.find!(params[:id]), status: :ok
    end

    def create
        album = Album.create(album_params)
        render json: album, status: :created
    end

    def destroy
        album = Album.find!(params[:id])
        album.destroy
        head :no_content
    end

    private

    def album_params
        params.permit(:deezer_album_id, :album_image, :album_name, :artist_id, :genre, :num_tracks, :artist_image, :artist_name, :deezer_artist_id)
    end

    def render_unprocessable_entity(invalid)
		render json: {error: invalid.record.errors}, status: :unprocessable_entity
	end
end
