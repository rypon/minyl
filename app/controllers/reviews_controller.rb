class ReviewsController < ApplicationController

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    # def index
    #     # render json: Review.all, indlude: :album status: :ok

    #     reviews = Review.all
    #     render json: reviews, include: :album
    # end

    def index
        if params[:albums_id]
          album = Album.find(params[:albums_id])
          reviews = album.reviews
        else
          reviews = Review.all
        end
        render json: reviews, include: :album
    end





    def show
        review = Review.find(params[:id])
        render json: review, include: :album
      end

    private
    def review_params
        params.permit(:album_id, :review_text, :review_rating, :user_id)
    end

    def render_unprocessable_entity(invalid)
		render json: {error: invalid.record.errors}, status: :unprocessable_entity
	end

end
