class WelcomeController < ApplicationController
  def index
    @siteTitle = "Inana Music"
    @thumbUrl = "http://www.inana.co.za/assets/inana-twitter.png"
    @siteUrl = "http://www.inana.co.za"
    @siteDescription = "Online profile of Inana, south african singer, song-writer, actress, voice over artist and public speaker"
  end
end
