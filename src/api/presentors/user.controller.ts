import { Controller } from "../../core/lib/router/controller.decorator";
import { Get } from "../../core/lib/router/get-mapping.decorator";
import { Patch } from "../../core/lib/router/patch-mapping.decorator";
import { Put } from "../../core/lib/router/put-mapping.decorator";
import { Delete } from "../../core/lib/router/delete-mapping.decorator";
import { Post } from "../../core/lib/router/post-mapping.decorator";
import express from "express";

@Controller("/user")
export class UserController {

  @Post('/')
  async create() {}

  @Delete("/")
  async delete() {}

  @Put("/")
  async update() {}

  @Patch("/")
  async updateByCondition() {}

  @Get("/")
  async getUserById(res: express.Response) {
    res.status(200).send({ message: "Hello, world!" })
  }
}