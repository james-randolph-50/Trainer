# module Api
    # module V1

class Api::V1::TrainersController < ApplicationController

    def index
        render json: Trainer.all
    end

end
