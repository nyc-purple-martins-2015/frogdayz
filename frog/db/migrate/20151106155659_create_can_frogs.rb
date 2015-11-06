class CreateCanFrogs < ActiveRecord::Migration
  def change
    create_table :can_frogs do |t|
      t.string :name
      t.string :color
      t.integer :tongue_length
      t.string :species

      t.timestamps null: false
    end
  end
end
