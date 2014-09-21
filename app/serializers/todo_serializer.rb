class TodoSerializer < ActiveModel::Serializer
  attributes :id, :body

  belongs_to :list

  url [:list, :todo]
end
