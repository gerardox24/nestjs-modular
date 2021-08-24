import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterUserCustomer1629763826566 implements MigrationInterface {
  name = 'alterUserCustomer1629763826566';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "customerId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce" UNIQUE ("customerId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "email" character varying(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP COLUMN "password"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "password" character varying(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "role"`);
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "role" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP CONSTRAINT "UQ_ac1455877a69957f7466d5dc78e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP COLUMN "lastName"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD "lastName" character varying(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP COLUMN "phone"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD "phone" character varying(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP COLUMN "phone"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD "phone" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP COLUMN "lastName"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD "lastName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" ADD CONSTRAINT "UQ_ac1455877a69957f7466d5dc78e" UNIQUE ("name")`,
    );
    await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "role"`);
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "role" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP COLUMN "password"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "password" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD "email" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP COLUMN "updatedAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."customer" DROP COLUMN "createdAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP COLUMN "customerId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP COLUMN "updatedAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP COLUMN "createdAt"`,
    );
  }
}