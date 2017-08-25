class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.string :title
      t.date :date
      t.decimal :amount, precision: 5, scale: 2

      t.timestamps
    end
  end
end
