import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1676248492943 implements MigrationInterface {
    name = 'migration1676248492943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "sessions" (
                "id" character varying(44) NOT NULL,
                "user_id" integer,
                "content" text NOT NULL,
                "flash" text NOT NULL,
                "updated_at" integer NOT NULL,
                "created_at" integer NOT NULL,
                CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "sessions"
        `);
    }

}
