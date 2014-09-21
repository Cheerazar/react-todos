class ListSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :todos

  url :list
end
