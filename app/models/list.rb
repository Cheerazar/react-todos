class List < ActiveRecord::Base
  default_scope { order( created_at: :asc)}
  has_many :todos
end
