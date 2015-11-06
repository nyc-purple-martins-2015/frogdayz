class CanFrogsController < ApplicationController

  def new
    @can_frog = CanFrog.new
  end

  def create
    @can_frog = CanFrog.new(frog_params)
    if @can_frog.save
      redirect_to '/'
    else
      render :new
    end

  end

  def show
    binding.pry
    @can_frog = CanFrog.find(params[:id])
  end

    private
    def frog_params
      frog_params = params.require(:can_frog).permit(:name, :species, :color, :tongue_length)
    end

end
