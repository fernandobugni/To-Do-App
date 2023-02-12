import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676213025408 implements MigrationInterface {
    name = 'migration1676213025408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todo" (
                "id" SERIAL NOT NULL,
                "text" character varying NOT NULL,
                CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "todo"
        `);
    }

}
