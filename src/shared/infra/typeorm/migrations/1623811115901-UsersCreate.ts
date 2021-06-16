import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersCreate1623811115901 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users"
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
