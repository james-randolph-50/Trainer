class CreateTrainers < ActiveRecord::Migration[5.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :specialty
      t.timestamps
    end
  end
end
