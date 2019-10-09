class HomeController < ApplicationController
  def index
    @user = { "name" => "dave", "email" => "dave@dave.com" }
    @user = @user.to_h
  end

  # def make_a_deal
  # end
  # def deal_pg1
  # end
  # def deal_pg2
  # end
end
