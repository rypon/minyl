class ReviewsController < ApplicationController

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    private
    def review_params
        params.permit(:album_id, :review_text, :review_rating, :user_id)
    end

    def render_unprocessable_entity(invalid)
		render json: {error: invalid.record.errors}, status: :unprocessable_entity
	end

end
