class Api::ItemsController < ApplicationController
  before_action :set_menu

  def index
    items = @menu.items
  end

  def create
 
  end

  def update
 
  end

  def destroy

  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end

  def set_menu
  @menu = Menu.find(params[:menu_id])
  end
end
