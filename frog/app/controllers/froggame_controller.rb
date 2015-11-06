class FroggameController < ApplicationController
  def game
  end

  def start
    render :file => 'froggame/start', layout: false
    # <%= render :file => 'layouts/_header' %>
  end
end
