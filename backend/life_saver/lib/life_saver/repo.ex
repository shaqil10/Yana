defmodule LifeSaver.Repo do
  use Ecto.Repo,
    otp_app: :life_saver,
    adapter: Ecto.Adapters.Postgres
end
