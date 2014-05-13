class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @posts }
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :json => @post, :status => :ok
    else
      render :json => @post, :status => :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
