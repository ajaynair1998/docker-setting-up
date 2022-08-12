import { database } from "../db";
import { Request, Response } from "express";
import { IPlayer, IRoom } from "../helpers/interfaces";
import socketConnectionController from "./SocketConnectionController";
import { currentExactTime, delay, roomId } from "../helpers";
import { AGServer } from "socketcluster-server";
import { default as ip } from "../ip.json";

let roomController = {
	get: async (req: Request, res: Response): Promise<any> => {
		try {
			let allKeysInDb = await database.keys("*");
			let allDataInDb: any = {};
			for (let key of allKeysInDb) {
				let value: any = await database.get(key);
				if (!value) {
					continue;
				}
				allDataInDb[key] = JSON.parse(value);
			}
			res.status(200).json({ data: { dbData: allDataInDb, ip: ip.ip } });
			return;
		} catch (err: any) {
			console.log(err);
		}
	},
};

export default roomController;
