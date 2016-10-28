class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    if @pokemon
      render :show
    else
      render :index
    end
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save
      render :show
    else
      render :index
    end
  end

  private
  def poke_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
