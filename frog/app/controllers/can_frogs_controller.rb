class CanFrogsController < ApplicationController

  def new
    @can_frog = CanFrog.new
  end

  def create
    @can_frog = CanFrog.new(frog_params)
    if @can_frog.save
      redirect_to "/can_frogs/#{@can_frog.id}"
    else
      render :new
    end

  end

  def show
    # byebug
    @can_frog = CanFrog.find(params[:id])
    @species = @can_frog.species
    render :show
  end

    private
    def frog_params
      frog_params = params.require(:can_frog).permit(:name, :species, :color, :tongue_length)
    end

end
