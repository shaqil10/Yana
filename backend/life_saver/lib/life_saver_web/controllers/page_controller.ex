defmodule LifeSaverWeb.PageController do
  use LifeSaverWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
