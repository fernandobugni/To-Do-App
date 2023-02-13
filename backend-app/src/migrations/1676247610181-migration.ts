import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676247610181 implements MigrationInterface {
    name = 'migration1676247610181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todo" (
                "id" SERIAL NOT NULL,
                "text" character varying NOT NULL,
                "authorId" integer,
                CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "clickedInTranslate" boolean NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "todo"
            ADD CONSTRAINT "FK_c56120106977cc14f975726af07" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "todo" DROP CONSTRAINT "FK_c56120106977cc14f975726af07"
        `);
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "clickedInTranslate"
        `);
        await queryRunner.query(`
            DROP TABLE "todo"
        `);
    }

}
