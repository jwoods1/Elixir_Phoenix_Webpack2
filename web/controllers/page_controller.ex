defmodule MxdyPhoenix.PageController do
  use MxdyPhoenix.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
