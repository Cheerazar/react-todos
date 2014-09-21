class ListsController < ApplicationController
  def index
    render json: List.all
  end

  def create
    list = List.create(list_params)
    if list.save
      render json: list
    else
      render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    List.destroy(params[:id])
    render json: { id: params[:id].to_i }
  end

  def update
    list = List.find(params[:id])
    list.update(list_params)
    if list.save
      render json: list
    else
      render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end
end
